module Types
  module InputTypes
    class TagInput < Types::BaseInputObject
      argument :id, ID, required: false
      argument :name, String, required: false
      argument :tag_number, Integer, required: false
      argument :active_flag, Boolean, required: false
    end
  end
end
