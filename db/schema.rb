# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20151107195149) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body"
    t.integer  "user_id"
    t.integer  "puzzle_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["puzzle_id"], name: "index_comments_on_puzzle_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "puzzles", force: :cascade do |t|
    t.text     "pattern"
    t.text     "notes"
    t.text     "best_solver"
    t.integer  "best_solution"
    t.integer  "clicks_created"
    t.integer  "user_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "puzzles", ["user_id"], name: "index_puzzles_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "user_name"
    t.string   "profile_pic"
    t.string   "email"
    t.boolean  "is_admin"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "password_digest"
  end

  create_table "wins", force: :cascade do |t|
    t.integer  "clicks"
    t.integer  "user_id"
    t.integer  "puzzle_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "wins", ["puzzle_id"], name: "index_wins_on_puzzle_id", using: :btree
  add_index "wins", ["user_id"], name: "index_wins_on_user_id", using: :btree

  add_foreign_key "comments", "puzzles"
  add_foreign_key "comments", "users"
  add_foreign_key "puzzles", "users"
  add_foreign_key "wins", "puzzles"
  add_foreign_key "wins", "users"
end
