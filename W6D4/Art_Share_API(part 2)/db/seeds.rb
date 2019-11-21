# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Artwork.delete_all
ArtworkShare.delete_all
Like.delete_all
Comment.delete_all
Favorite.delete_all

u1 = User.create(username: 'George')
u2 = User.create(username: 'Fred')
u3 = User.create(username: 'Alex')
u4 = User.create(username: 'Mike')
u5 = User.create(username: 'John')

a1 = Artwork.create(artist_id: u1.id, title: 'Mona Lisa', image_url: 'monalisa.com')
a2 = Artwork.create(artist_id: u2.id, title: 'Picasso', image_url: 'picasso.com')
a3 = Artwork.create(artist_id: u3.id, title: 'Rich and Sami', image_url: 'richandsami.com')
a4 = Artwork.create(artist_id: u4.id, title: 'Mike is awesome', image_url: 'mike.com')
a5 = Artwork.create(artist_id: u5.id, title: 'Buns', image_url: 'ass.com')
a6 = Artwork.create(artist_id: u3.id, title: 'Mona Lisa', image_url: 'monalisa2.com')
a7 = Artwork.create(artist_id: u5.id, title: 'Boobs', image_url: 'ass.com/2/')

ArtworkShare.create(artwork_id: a1.id, viewer_id: u5.id)
ArtworkShare.create(artwork_id: a2.id, viewer_id: u4.id)
ArtworkShare.create(artwork_id: a3.id, viewer_id: u5.id)
ArtworkShare.create(artwork_id: a4.id, viewer_id: u3.id)

c1 = Comment.create(artwork_id: a1.id, user_id: u5.id, body: 'this piece of art is fly')
c2 = Comment.create(artwork_id: a2.id, user_id: u4.id, body: 'this piece of art is shitty')
Comment.create(artwork_id: a2.id, user_id: u3.id, body: 'i agree with previous comment')
Comment.create(artwork_id: a4.id, user_id: u4.id, body: 'damnnn this is dope!!')
Comment.create(artwork_id: a4.id, user_id: u2.id, body: 'thats one sexy mother fuckerrr')

Like.create(user_id: a1.id, likable_id: a1.id, likable_type: 'Artwork')
Like.create(user_id: a1.id, likable_id: a2.id, likable_type: 'Artwork')
Like.create(user_id: a1.id, likable_id: a3.id, likable_type: 'Artwork')
Like.create(user_id: a2.id, likable_id: a1.id, likable_type: 'Artwork')
Like.create(user_id: a2.id, likable_id: c1.id, likable_type: 'Comment')
Like.create(user_id: a2.id, likable_id: c2.id, likable_type: 'Comment')


Favorite.create(user_id: u4.id, artwork_id:a4.id)
Favorite.create(user_id: u5.id, artwork_id:a5.id)
Favorite.create(user_id: u3.id, artwork_id:a1.id)
Favorite.create(user_id: u1.id, artwork_id:a2.id)