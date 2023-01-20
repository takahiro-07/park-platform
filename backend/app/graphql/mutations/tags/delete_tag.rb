module Mutations
  module Tags
    class DeleteTag < Mutations::BaseMutation
      graphql_name 'deleteTag'

      argument :id, ID, required: true

      field :tag, Types::ObjectTypes::TagType, null: false

      def resolve(id:)
        tag = ::Tag.find(params[:id])
        tag.destroy!

        { tag: }
      rescue StandardError => e
        GraphQL::ExecutionError.new(e.message)
      end
    end
  end
end
