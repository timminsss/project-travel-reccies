# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Destination.delete_all

Destination.create!(name:"Melbourne", city:"Melbourne", country:"Australia", user_id:1)
Destination.create!(name:"Sydney", city:"Sydney", country:"Australia", user_id:1)
Destination.create!(name:"Paris", city:"Paris", country:"France", user_id:1)
Destination.create!(name:"Glasgow", city:"Glasgow", country:"Scotland", user_id:1)
Destination.create!(name:"New York", city:"New York", country:"USA", user_id:1)
