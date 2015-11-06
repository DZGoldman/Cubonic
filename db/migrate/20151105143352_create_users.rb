class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :profile_pic
      t.string :email
      t.boolean :is_admin

      t.timestamps null: false
    end
  end
end
