module Types
  module ObjectTypes
    class TagType < Types::BaseObject
      field :id, ID, null: false
      field :name, String, null: false
      field :tag_number, Integer, null: false
      field :active_flag, Boolean, null: false
      field :created_at, GraphQL::Types::ISO8601DateTime, null: false
      field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
  end
end
