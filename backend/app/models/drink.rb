class Drink < ApplicationRecord
    has_many :comments, :dependent => :destroy
end
