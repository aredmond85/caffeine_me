class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :summary, :post_id
end
