class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_attached_file :avatar,
    styles: {
      thumb:   '200x200#',
      medium:  '400>x',
      large:   '800>x',
      square:  '400x400#'
    },
    default_url: '/assets/placeholder.png',
    convert_options: {
      thumb: '-quality 90',
      medium: '-quality 90',
      large: '-quality 90',
      square: '-quality 90'
    }

  validates_attachment :avatar,
  content_type: { content_type: ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'] },
  size: { less_than: 3.megabyte }

  # Association
  has_many :posts
end
