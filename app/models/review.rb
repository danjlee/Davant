# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rest_id    :integer          not null
#  author_id  :integer          not null
#  overall    :integer          not null
#  food       :integer          not null
#  ambience   :integer          not null
#  service    :integer          not null
#  comment    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :rest_id, :author_id, presence: true
    validates :overall, :food, :ambience, :service, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true
    validates :comment, length: { maximum: 500 }

    belongs_to :reservation,
    foreign_key: :rest_id,
    class_name: :Reservation

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

end
