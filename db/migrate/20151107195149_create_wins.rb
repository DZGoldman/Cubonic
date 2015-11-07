class CreateWins < ActiveRecord::Migration
  def change
    create_table :wins do |t|
      t.integer :clicks
      t.references :user, index: true, foreign_key: true
      t.references :puzzle, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
