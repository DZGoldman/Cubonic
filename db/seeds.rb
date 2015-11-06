# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users= User.create([
{user_name: "DZack", profile_pic: "http://www.fillmurray.com/g/400/500", email: "dzgoldman@wesleynan.edu", is_admin:true},
{user_name: "Alex", profile_pic: "http://www.fillmurray.com/g/500/400", email: "alex@alex.edu", is_admin:false}

])



puzzles= Puzzle.create([
  {pattern: "000000000000000000000000000011100000001233321000001200021000001233321000000011100000000000000000000000000000000000000000000000000000000000000000",
  notes: "This is my test puzzle pattern",
  clicks_created: 20,
  user_id: 1},
  {pattern: "100000000000000000000000000011100000001233321000001200021000001233321000000011100000000000000000000000000000000000000000000000000000000000000001",
  notes: "This is like the other puzzle, cept blue in two corners",
  clicks_created: 30,
  user_id: 2},

])

# puzzles= Puzzle.CreatePuzzles
#
# comments= Comment.create([
# {body: "nice puzzle bro", puzzle_id: 1},
# {body: "sick bro", puzzle_id: 2},
# ])
