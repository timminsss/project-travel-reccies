class Destination < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :city, presence: true
  validates :country, presence: true

  geocoded_by :city
  after_validation :geocode, if: :will_save_change_to_city?
end
