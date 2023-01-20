module Mutations
  module Tags
    class DeleteTag < Mutations::BaseMutation
      graphql_name 'deleteTag'

      argument :id, ID, required: true

      field :id, ID, null: false

      def resolve(id:)
        tag = ::Tag.find(id)
        tag.destroy!

        # { id: id }
      rescue StandardError => e
        GraphQL::ExecutionError.new(e.message)
      end
    end
  end
end
