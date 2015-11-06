class User < ActiveRecord::Base
  has_many :puzzles
  has_many :comments
end
