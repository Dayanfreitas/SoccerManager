class DropContactsTable < ActiveRecord::Migration[6.1]
  def up
    drop_table :contacts
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
