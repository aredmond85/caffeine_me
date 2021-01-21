class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :caffeine
end
