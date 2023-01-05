class CreateTattoos < ActiveRecord::Migration[6.1]
  def change
    create_table :tattoos do |t|
      t.integer :size
      t.string :location
      t.boolean :first_tattoo
      t.boolean :color

      t.timestamps
    end
  end
end
