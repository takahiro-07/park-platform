module Queries
  module Tags
    class Tags < Queries::BaseQuery
      graphql_name 'Tags'

      type [Types::ObjectTypes::TagType], null: false

      def resolve
        ::Tag.order(created_at: :desc)
      end
    end
  end
end
