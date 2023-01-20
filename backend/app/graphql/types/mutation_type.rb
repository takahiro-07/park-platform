module Types
  class MutationType < Types::BaseObject
    field :create_tag, mutation: Mutations::Tags::CreateTag
    field :update_tag, mutation: Mutations::Tags::UpdateTag
    field :delete_tag, mutation: Mutations::Tags::DeleteTag
  end
end
