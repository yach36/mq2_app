class Post < ApplicationRecord
  validates :txt, :track_id, presence: true
end
