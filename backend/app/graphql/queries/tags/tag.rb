module Queries
  module Tags
    class Tag < Queries::BaseQuery
      graphql_name 'Tag'

      argument :id, ID, required: true

      type Types::ObjectTypes::TagType, null: false

      def resolve(id:)
        ::Tag.find(id)
      end
    end
  end
end
