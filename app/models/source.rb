class Source < ApplicationRecord
  belongs_to :subject
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :content, presence: true
end
