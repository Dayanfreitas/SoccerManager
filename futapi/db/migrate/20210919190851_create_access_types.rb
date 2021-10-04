class CreateAccessTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :access_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
