module Mutations
  module Tags
    class CreateTag < Mutations::BaseMutation
      graphql_name 'createTag'

      argument :params, Types::InputTypes:TagInput, required: true

      field :tag, Types::ObjectTypes::TagType, null: false

      def resolve(params:)
        tag = ::Tag.create!(
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
