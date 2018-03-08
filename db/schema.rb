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

ActiveRecord::Schema.define(version: 20180308062115) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bizs", force: :cascade do |t|
    t.string "name", null: false
    t.string "address1", null: false
    t.string "address2", default: ""
    t.string "address3", default: ""
    t.string "city", default: ""
    t.string "zip_code", default: ""
    t.string "state", default: ""
    t.float "lat"
    t.float "lng"
    t.string "price", default: "$$"
    t.string "phone", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "website"
    t.string "img_url"
    t.boolean "takes_reservations", default: true
    t.boolean "delivery", default: false
    t.boolean "take_out", default: true
    t.boolean "credit_cards", default: true
    t.boolean "apple_pay", default: true
    t.boolean "android_pay", default: true
    t.boolean "bitcoin", default: false
    t.string "parking", default: "Street"
    t.boolean "bike_parking", default: true
    t.boolean "wheelchair", default: true
    t.string "noise_level", default: "Quiet"
    t.string "alcohol", default: "Full Bar"
    t.boolean "outdoor_seating", default: true
    t.boolean "wifi", default: true
    t.boolean "has_tv", default: true
    t.boolean "dogs_allowed", default: true
    t.boolean "cats_allowed", default: true
    t.boolean "waiter_service", default: true
    t.boolean "caters", default: true
    t.boolean "gender_neutral_restrooms", default: true
    t.index ["name"], name: "index_bizs_on_name"
  end

  create_table "bookmarks", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "biz_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["biz_id"], name: "index_bookmarks_on_biz_id"
    t.index ["user_id", "biz_id"], name: "index_bookmarks_on_user_id_and_biz_id", unique: true
    t.index ["user_id"], name: "index_bookmarks_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category"], name: "index_categories_on_category", unique: true
  end

  create_table "categorizings", force: :cascade do |t|
    t.integer "biz_id", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["biz_id", "category_id"], name: "index_categorizings_on_biz_id_and_category_id", unique: true
    t.index ["biz_id"], name: "index_categorizings_on_biz_id"
    t.index ["category_id"], name: "index_categorizings_on_category_id"
  end

  create_table "hours", force: :cascade do |t|
    t.integer "biz_id", null: false
    t.integer "day", null: false
    t.string "start", null: false
    t.string "end", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["biz_id"], name: "index_hours_on_biz_id"
  end

  create_table "imgs", force: :cascade do |t|
    t.integer "biz_id", null: false
    t.integer "user_id", null: false
    t.string "url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.index ["biz_id"], name: "index_imgs_on_biz_id"
    t.index ["user_id"], name: "index_imgs_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "biz_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "rate", default: 0, null: false
    t.index ["biz_id"], name: "index_reviews_on_biz_id"
    t.index ["user_id", "biz_id"], name: "index_reviews_on_user_id_and_biz_id", unique: true
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.integer "biz_id", null: false
    t.integer "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["biz_id", "tag_id"], name: "index_taggings_on_biz_id_and_tag_id", unique: true
    t.index ["biz_id"], name: "index_taggings_on_biz_id"
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "tag_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_name"], name: "index_tags_on_tag_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar_url", default: "https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"
    t.string "phone_number"
    t.string "first_name"
    t.string "last_name"
    t.string "headline"
    t.text "love"
    t.string "find_me_in"
    t.string "multiple_email"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
