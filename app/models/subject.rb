class Subject < ApplicationRecord
  has_many :sources, dependent: :destroy
  validates :name, presence: true
  validates :name, uniqueness: true
end
