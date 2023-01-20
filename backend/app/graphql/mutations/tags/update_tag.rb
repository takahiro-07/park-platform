module Mutations
  module Tags
    class UpdateTag < Mutations::BaseMutation
      graphql_name 'updateTag'

      argument :params, Types::InputTypes::TagInput, required: true

      field :tag, Types::ObjectTypes::TagType, null: false

      def resolve(params:)
        tag = ::Tag.find(params[:id])
        tag.update!(
          name: params[:name],
          tag_number: params[:tag_number],
          active_flag: params[:active_flag]
        )

        { tag: tag }
      rescue StandardError => e
        GraphQL::ExecutionError.new(e.message)
      end
    end
  end
end
