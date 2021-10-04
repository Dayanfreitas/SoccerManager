class AddReferenceAccessTypeToUser < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :access_type, null: false, foreign_key: true
  end
end
