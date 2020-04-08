# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  location        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :fname, :lname, :email, :password_digest, :location, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :reservations,
    foreign_key: :user_id,
    class_name: :Reservation

    has_many :reviews,
    foreign_key: :author_id,
    class_name: :Review

    has_many :favorites,
    foreign_key: :user_id,
    class_name: :Favorite
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypted = BCrypt::Password.new(self.password_digest)
        bcrypted.is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end
end
