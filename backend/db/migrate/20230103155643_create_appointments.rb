class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :client_id
      t.integer :tattoo_id
      t.integer :artist_id
      t.datetime :apt_datetime
      t.timestamps
    end
  end

end
