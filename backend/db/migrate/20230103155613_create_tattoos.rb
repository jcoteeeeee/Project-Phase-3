class CreateTattoos < ActiveRecord::Migration[6.1]
  def change
    create_table :tattoos do |t|
      t.integer :size
      t.boolean :claimed
      t.string :image_url
      t.timestamps
    end
  end
end
