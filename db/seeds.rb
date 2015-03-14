# =========================
# Seeding Users
# =========================
puts 'Seeding 100 Users...'
User.destroy_all
users = []
users << User.create({
  email:      'staff@ssf.vn',
  password:   '12345678',
  name:       'Admin',
  user_type:  2
})
100.times do
  avatar = File.open(Rails.root.join('app', 'assets', 'images', 'avatar', "avatar_#{rand(1..14)}.png"))

  users << User.create({
    email: Faker::Internet.email,
    password: '12345678',
    name: Faker::Name.name,
    avatar: avatar,
    user_type: 1,
    user_status: rand(1..2),
    phone: Faker::PhoneNumber.phone_number
    # authentication_token: Devise.friendly_token
  })

  avatar.close
end
p 'Finished creating Users.'

# =========================
# Seeding Topics
# =========================
puts 'Seeding 20 Topics...'
Topic.destroy_all
topics  = []
20.times do |q|
  content = Faker::Lorem.paragraph

  topics << Topic.create({
    category_id: rand(1..4),
    title: Faker::Lorem.sentence,
    description: content.truncate(100),
    content: content,
    status: rand(1..3)
  })
end
p 'Finished creating Topics.'

# =========================
# Seeding Posts
# =========================
puts 'Seeding Posts...'
Post.destroy_all
posts  = []
100.times do |q|
  content = Faker::Lorem.paragraph

  posts << Post.create({
    user_id: users.sample.id,
    topic_id: topics.sample.id,
    title: Faker::Lorem.sentence,
    description: content.truncate(100),
    content: content,
    status: rand(1..3)
  })
end
p 'Finished creating Posts.'
