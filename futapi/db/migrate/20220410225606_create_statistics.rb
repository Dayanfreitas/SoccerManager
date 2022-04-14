class CreateStatistics < ActiveRecord::Migration[6.1]
  def change
    create_table :statistics do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :goals
      t.integer :assistance
      t.integer :games

      t.timestamps
    end
  end
end
