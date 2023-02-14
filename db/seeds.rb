# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Destination.delete_all

Destination.create!(name:"Melbourne", city:"Melbourne", country:"Australia", user_id:1, image_url:"https://www.gostudy.com.au/wp-content/uploads/2018/10/MEL_header_2-1.jpg")
Destination.create!(name:"Sydney", city:"Sydney", country:"Australia", user_id:1, image_url:"https://a.cdn-hotels.com/gdcs/production0/d1645/0c67ff64-cf54-4886-91dd-89aa601463af.jpg")
Destination.create!(name:"Paris", city:"Paris", country:"France", user_id:1, image_url:"https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900")
Destination.create!(name:"Glasgow", city:"Glasgow", country:"Scotland", user_id:1, image_url:"https://i.natgeofe.com/n/6b003bc4-e635-46bc-be66-615fe5dfdbe1/resized-RTH4J4_3x2.jpg")
Destination.create!(name:"New York", city:"New York", country:"USA", user_id:1, image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg")
