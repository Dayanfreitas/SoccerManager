class AddColumnToAccessType < ActiveRecord::Migration[6.1]
  def change
    add_column :access_types, :initials, :string, limit: 3
  end
end
