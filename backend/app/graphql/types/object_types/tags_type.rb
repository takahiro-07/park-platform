module Queries
  module ObjectTypes
    class TagType < Types::BaseObject
      field :tags, [Types::ObjectTypes::TagType], null: false
    end
  end
end
