class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.string :name, null: false, comment: 'タグ名'
      t.integer :tag_number, null: false, comment: 'タグ番号'
      t.boolean :active_flag, null: false, comment: 'フラグ'
      t.timestamps
    end
  end
end
