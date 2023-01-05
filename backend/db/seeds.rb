# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.create(first_name: "Ron", last_name: "Cugino", email: "rcugino@email.com")
Artist.create(first_name: "Joe", last_name: "Silverstein", email: "joesemail@email.com")
Artist.create(first_name: "Mike", last_name: "Reynolds", email: "mikereynolds@email.com")
Artist.create(first_name: "Sara", last_name: "Alcantara", email: "saraal@email.com")
Artist.create(first_name: "Jennifer", last_name: "Thomas", email: "rcugino@email.com")


Client.create(first_name: "Ryan", last_name: 'Howard', email: "rhpe905@gmail.com")
Client.create(first_name: "Maria", last_name: 'DiMicco', email: "dimaria10@gmail.com")
Client.create(first_name: "Ryan", last_name: 'Cousins', email: "rcousins@gmail.com")
Client.create(first_name: "Paula", last_name: 'Jefferson', email: "pjaelpwos@gmail.com")
Client.create(first_name: "Devin", last_name: 'Erikssen', email: "deverikksen@gmail.com")
Client.create(first_name: "Don", last_name: 'Richards', email: "drichards@gmail.com")
Client.create(first_name: "Cara", last_name: 'McDonald', email: "mcdonaldc@gmail.com")
Client.create(first_name: "Miguel", last_name: 'Verde', email: "mikegreen@gmail.com")
Client.create(first_name: "Carlos", last_name: 'Estevez', email: "charlies@gmail.com")

Tattoo.create(size: "Big", location: "Lower right arm", first_tattoo: true, color: true)
Tattoo.create(size: "Small", location: "Upper back", first_tattoo: false, color: true)
Tattoo.create(size: "Big", location: "Upper left arm", first_tattoo: true, color: false)
Tattoo.create(size: "Medium", location: "Lower left leg", first_tattoo: true, color: true)
Tattoo.create(size: "Small", location: "Upper right leg", first_tattoo: false, color: false)
Tattoo.create(size: "Big", location: "Left shoulder", first_tattoo: true, color: true)
Tattoo.create(size: "Medium", location: "Upper back", first_tattoo: true, color: true)
Tattoo.create(size: "Big", location: "Right shoulder", first_tattoo: false, color: false)
Tattoo.create(size: "Medium", location: "Lower back", first_tattoo: true, color: true)
Tattoo.create(size: "Small", location: "Upper back", first_tattoo: false, color: true)

Appointment.create(client_id: Client.first.id, tattoo_id: Tattoo.second.id, artist_id: Artist.last.id, apt_date: 2022-01-9, apt_time: 5:30:00)
Appointment.create(client_id: Client.fifth.id, tattoo_id: Tattoo.first.id, artist_id: Artist.third.id, apt_date: 2022-01-9, apt_time: 2:00:00)
Appointment.create(client_id: Client.second.id, tattoo_id: Tattoo.fifth.id, artist_id: Artist.second.id, apt_date: 2022-01-10, apt_time: 11:00:00)
Appointment.create(client_id: Client.third.id, tattoo_id: Tattoo.fourth.id, artist_id: Artist.fourth.id, apt_date: 2022-01-10, apt_time: 12:30:00)
Appointment.create(client_id: Client.fourth.id, tattoo_id: Tattoo.third.id, artist_id: Artist.first.id , apt_date: 2022-01-11, apt_time: 5:00:00)





