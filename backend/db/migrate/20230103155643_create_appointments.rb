class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :client_id
      t.integer :tattoo_id
      t.integer :artist_id
      t.date :apt_date
      t.time :apt_time
      t.timestamps
    end
  end
end
