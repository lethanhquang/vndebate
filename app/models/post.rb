class Post < ActiveRecord::Base
  extend Enumerize

  STATUS = { pending: 1, published: 2, rejected: 3 }
  enumerize :status, in: STATUS, scope: true, default: :pending

  belongs_to :topic
  belongs_to :user
end
