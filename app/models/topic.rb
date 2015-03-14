class Topic < ActiveRecord::Base
  extend Enumerize

  STATUS = { pending: 1, published: 2, rejected: 3 }
  enumerize :status, in: STATUS, scope: true, default: :pending

  has_attached_file :thumbnail,
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

  # Validate
  validates_attachment :thumbnail,
    content_type: { content_type: ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'] },
    size: { less_than: 3.megabyte }

  # Association
  has_many :posts
  belongs_to :category
end
