class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :number, limit: 2
      t.string :stars, limit: 1, default: 0

      t.timestamps
    end
  end
end
