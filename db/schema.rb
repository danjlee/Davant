# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_01_125319) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id"
    t.integer "rest_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rest_id"], name: "index_favorites_on_rest_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "rest_id", null: false
    t.string "time", null: false
    t.string "date", null: false
    t.integer "party_size", null: false
    t.string "occasion", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rest_id"], name: "index_reservations_on_rest_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "location", null: false
    t.string "phone_number", null: false
    t.string "cuisine", null: false
    t.string "menu", null: false
    t.string "hours", null: false
    t.string "dress_code", null: false
    t.string "exec_chef", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location"], name: "index_restaurants_on_location"
    t.index ["name"], name: "index_restaurants_on_name"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "overall", null: false
    t.integer "food", null: false
    t.integer "ambience", null: false
    t.integer "service", null: false
    t.text "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "res_id", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["res_id"], name: "index_reviews_on_res_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "location", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
