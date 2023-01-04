class CreateTattoos < ActiveRecord::Migration[6.1]
  def change
    create_table :tattoos do |t|
      t.integer :size
      t.boolean :claimed
      t.string :image_url
      t.integer :artist_id
      t.integer :client_id
      t.timestamps
    end
  end
end
