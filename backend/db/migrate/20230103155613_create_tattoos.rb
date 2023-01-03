class CreateTattoos < ActiveRecord::Migration[6.1]
  def change
    create_table :tattoos do |t|

      t.timestamps
    end
  end
end
