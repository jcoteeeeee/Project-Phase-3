# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating artists"
artist1 = Artist.create(first_name: "Ron", last_name: "Cugino", email: "rcugino@email.com")
artist2 = Artist.create(first_name: "Joe", last_name: "Silverstein", email: "joesemail@email.com")
artist3 = Artist.create(first_name: "Mike", last_name: "Reynolds", email: "mikereynolds@email.com")
artist4 = Artist.create(first_name: "Sara", last_name: "Alcantara", email: "saraal@email.com")
artist5 = Artist.create(first_name: "Jennifer", last_name: "Thomas", email: "jenniferthomas@email.com")

puts "creating clients"
client1 = Client.create(first_name: "Ryan", last_name: 'Howard', email: "rhpe905@gmail.com")
client2 = Client.create(first_name: "Maria", last_name: 'DiMicco', email: "dimaria10@gmail.com")
client3 = Client.create(first_name: "Ryan", last_name: 'Cousins', email: "rcousins@gmail.com")
client4 = Client.create(first_name: "Paula", last_name: 'Jefferson', email: "pjaelpwos@gmail.com")
client5 = Client.create(first_name: "Devin", last_name: 'Erikssen', email: "deverikksen@gmail.com")
client6 = Client.create(first_name: "Don", last_name: 'Richards', email: "drichards@gmail.com")
client7 = Client.create(first_name: "Cara", last_name: 'McDonald', email: "mcdonaldc@gmail.com")
client8 = Client.create(first_name: "Miguel", last_name: 'Verde', email: "mikegreen@gmail.com")
client9 = Client.create(first_name: "David", last_name: "Lewandowski", email: "dlew@gmail.com")
client10 = Client.create(first_name: "Carlos", last_name: 'Estevez', email: "charlies@gmail.com")

puts "creating tattoos"
tattoo1 = Tattoo.create(size: "Big", location: "Lower right arm", first_tattoo: true, color: true)
tattoo2 = Tattoo.create(size: "Small", location: "Upper back", first_tattoo: false, color: true)
tattoo3 = Tattoo.create(size: "Big", location: "Upper left arm", first_tattoo: true, color: false)
tattoo4 = Tattoo.create(size: "Medium", location: "Lower left leg", first_tattoo: true, color: true)
tattoo5 = Tattoo.create(size: "Small", location: "Upper right leg", first_tattoo: false, color: false)
tattoo6 = Tattoo.create(size: "Big", location: "Left shoulder", first_tattoo: true, color: true)
tattoo7 = Tattoo.create(size: "Medium", location: "Upper back", first_tattoo: true, color: true)
tattoo8 = Tattoo.create(size: "Big", location: "Right shoulder", first_tattoo: false, color: false)
tattoo9 = Tattoo.create(size: "Medium", location: "Lower back", first_tattoo: true, color: true)
tattoo10 = Tattoo.create(size: "Small", location: "Upper back", first_tattoo: false, color: true)

puts "creating appointments"
Appointment.create(client_id: client1.id, tattoo_id: tattoo2.id, artist_id: artist1.id, apt_datetime: '2023-01-09 05:30:00')
Appointment.create(client_id: client5.id, tattoo_id: tattoo1.id, artist_id: artist3.id, apt_datetime: '2023-01-09 02:00:00')
Appointment.create(client_id: client2.id, tattoo_id: tattoo5.id, artist_id: artist2.id, apt_datetime: '2023-01-10 11:00:00')
Appointment.create(client_id: client3.id, tattoo_id: tattoo4.id, artist_id: artist4.id, apt_datetime: '2023-01-10 12:30:00')
Appointment.create(client_id: client4.id, tattoo_id: tattoo3.id, artist_id: artist1.id, apt_datetime: '2023-01-11 05:00:00')
Appointment.create(client_id: client6.id, tattoo_id: tattoo10.id, artist_id: artist1.id, apt_datetime: '2023-01-11 10:00:00')
Appointment.create(client_id: client10.id, tattoo_id: tattoo9.id, artist_id: artist2.id, apt_datetime: '2023-01-11 03:00:00')
Appointment.create(client_id: client8.id, tattoo_id: tattoo6.id, artist_id: artist5.id, apt_datetime: '2023-01-12 04:30:00')
Appointment.create(client_id: client7.id, tattoo_id: tattoo8.id, artist_id: artist3.id, apt_datetime: '2023-01-12 07:00:00')
Appointment.create(client_id: client9.id, tattoo_id: tattoo7.id, artist_id: artist4.id, apt_datetime: '2023-01-12 06:30:00')





