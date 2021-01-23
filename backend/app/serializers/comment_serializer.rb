class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :summary, :drink_id
end
