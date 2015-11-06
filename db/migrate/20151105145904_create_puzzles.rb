class CreatePuzzles < ActiveRecord::Migration
  def change
    create_table :puzzles do |t|
      t.text :pattern
      t.text :notes
      t.integer :best_solution
      t.integer :clicks_created
      t.references :user, index: true, foreign_key: true


      t.timestamps null: false
    end
  end
end
