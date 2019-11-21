# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: 'George')
User.create(username: 'Fred')
User.create(username: 'Alex')
User.create(username: 'Mike')
User.create(username: 'John')

Artwork.create(artist_id: 15, title: 'Mona Lisa', image_url: 'monalisa.com')
Artwork.create(artist_id: 16, title: 'Picasso', image_url: 'picasso.com')
Artwork.create(artist_id: 17, title: 'Rich and Sami', image_url: 'richandsami.com')
Artwork.create(artist_id: 18, title: 'Mike is awesome', image_url: 'mike.com')
Artwork.create(artist_id: 19, title: 'Buns', image_url: 'ass.com')
Artwork.create(artist_id: 16, title: 'Mona Lisa', image_url: 'monalisa2.com')
Artwork.create(artist_id: 19, title: 'Boobs', image_url: 'ass.com/2/')

ArtworkShare.create(artwork_id: 1, viewer_id: 19)
ArtworkShare.create(artwork_id: 2, viewer_id: 18)
ArtworkShare.create(artwork_id: 3, viewer_id: 19)
ArtworkShare.create(artwork_id: 2, viewer_id: 15)