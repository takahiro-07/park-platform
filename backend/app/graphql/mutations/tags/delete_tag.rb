module Mutations
  module Tags
    class DeleteTag < Mutations::BaseMutation
      graphql_name 'deleteTag'

      argument :id, ID, required: true

      field :deleted, Boolean, null: false

      def resolve(id:)
        tag = ::Tag.find(id)
        result = tag.destroy!

        { deleted: result }
      rescue StandardError => e
        GraphQL::ExecutionError.new(e.message)
      end
    end
  end
end
