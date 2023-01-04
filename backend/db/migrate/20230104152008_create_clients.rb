class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.boolean :above_18
      t.string :email

      t.timestamps
    end
  end
end
