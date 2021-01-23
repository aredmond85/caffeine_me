class DrinkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :caffeine
end
